"""This module contain Coordinates class."""

from math import trunc


class Coordinates:

    def __init__(self):
        self.latitude = 0.0
        self.longitude = 0.0

    def format(self, coord):
        if self.latitude > 0:
            lat = str(trunc(self.latitude)) + '° ' + str(trunc((self.latitude - trunc(self.latitude))*60)) + '′ N'
        else:
            lat = str(abs(trunc(self.latitude))) + '° ' + str(abs(trunc((self.latitude - trunc(self.latitude))*60)))\
                                                 + '′ S'
        if self.longitude > 0:
            long = str(trunc(self.longitude)) + '° ' + str(trunc((self.longitude - trunc(self.longitude))*60)) + '′ E'
        else:
            long = str(abs(trunc(self.longitude))) + '° ' + str(abs(trunc((self.longitude - trunc(self.longitude))*60)))\
                                                   + '′ W'

        if coord == 'latitude':
            return lat
        elif coord == 'longitude':
            return long
        elif coord == 'both':
            return {'latitude': lat, 'longitude': long}

    def __str__(self):
        return str(self.latitude) + '\', \'' + str(self.longitude)

    def __dir__(self):
        return ['latitude', 'longitude']