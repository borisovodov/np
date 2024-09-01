//
//  Bucket.swift
//
//
//  Created by Boris Ovodov on 01.09.2024.
//

import SotoS3

struct Bucket {
    static let pathToFiles: String = "\(Self.endpoint)/\(Self.bucketName)"
    private static let bucketName: String = "e1bedefb-np-bucket"
    private static let endpoint: String = "https://s3.timeweb.cloud"
    private static let region: String = "ru-1"

    func createBucketPutGetObject() async throws {
        let client = AWSClient(credentialProvider: .static(accessKeyId: "TZ9BCUBY1DKD7VLZ6OMK", secretAccessKey: "GMKIGKbdSD0kEGEKsKms1EhBcTej6v0qY82tqZny"))
        let s3 = S3(client: client, region: Region(rawValue: Self.region), endpoint: Self.endpoint)
        
        
        
        
        // Upload text file to the s3
        let bodyData = "hello world"
        let putObjectRequest = S3.PutObjectRequest(
            acl: .publicRead,
            body: AWSHTTPBody(string: bodyData),
            bucket: Self.bucketName,
            key: "hello.txt"
        )
        _ = try await s3.putObject(putObjectRequest)
        // download text file just uploaded to S3
        let getObjectRequest = S3.GetObjectRequest(bucket: Self.bucketName, key: "hello.txt")
        let response = try await s3.getObject(getObjectRequest)
        // print contents of response
        print(response.body)
        try await client.shutdown()
    }
}
