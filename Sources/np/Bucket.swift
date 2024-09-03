//
//  Bucket.swift
//
//
//  Created by Boris Ovodov on 01.09.2024.
//

import SotoS3
import Vapor

enum BucketError: Error {
	case incorrectAWSCredentials
}

struct Bucket {
	enum FileType: String {
		case newspaperPhoto
		case newspaperPhotoThumbnail
		case avatar

		var folderPath: String {
			switch self {
				case .newspaperPhoto:
					return "newspapers/originals/"
				case .newspaperPhotoThumbnail:
					return "newspapers/thumbnails/"
				case .avatar:
					return "avatars/"
			}
		}

		func folderURL() throws -> String {
			switch self {
				case .newspaperPhoto:
					return try "\(Bucket.pathToFiles())/\(Self.newspaperPhoto.folderPath)"
				case .newspaperPhotoThumbnail:
					return try "\(Bucket.pathToFiles())/\(Self.newspaperPhotoThumbnail.folderPath)"
				case .avatar:
					return try "\(Bucket.pathToFiles())/\(Self.avatar.folderPath)"
			}
		}
	}

    static func pathToFiles() throws -> String {
		guard let endpoint else { throw BucketError.incorrectAWSCredentials }
		guard let bucketName else { throw BucketError.incorrectAWSCredentials }

		return "\(endpoint)/\(bucketName)"
	}

    private static let accessKeyId: String? = Environment.get("AWS_ACCESS_KEY_ID")
    private static let secretAccessKey: String? = Environment.get("AWS_SECRET_ACCESS_KEY")
    private static let bucketName: String? = Environment.get("AWS_BUCKET_NAME")
    private static let endpoint: String? = Environment.get("AWS_ENDPOINT")
    private static let region: String? = Environment.get("AWS_REGION")

    static func put(file: File, fileType: Bucket.FileType) async throws -> File {
		guard let accessKeyId else { throw BucketError.incorrectAWSCredentials }
		guard let secretAccessKey else { throw BucketError.incorrectAWSCredentials }
		guard let bucketName else { throw BucketError.incorrectAWSCredentials }
		guard let endpoint else { throw BucketError.incorrectAWSCredentials }
		guard let region else { throw BucketError.incorrectAWSCredentials }

        let client = AWSClient(credentialProvider: .static(accessKeyId: accessKeyId, secretAccessKey: secretAccessKey))
        let s3 = S3(client: client, region: Region(rawValue: region), endpoint: endpoint)
        let key: String = fileType.folderPath + file.filename

        let putObjectRequest = S3.PutObjectRequest(
            acl: .publicRead,
            body: AWSHTTPBody(buffer: file.data),
            bucket: bucketName,
            key: key
        )

		_ = try await s3.putObject(putObjectRequest)

		try await client.shutdown()
        
        return file
    }

	static func fileURL(name: String, fileType: Bucket.FileType) throws -> String {
		return try fileType.folderURL() + name
	}
}
