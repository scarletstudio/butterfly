import sys
import unittest

from average_rating import calculate_analytics

sys.path.insert(0, "/workspace/butterfly/pipeline/scripts/")


class TestAverageRating(unittest.TestCase):
    def test_calculate_analytics(self):
        # Step 1: Initialize dependencies
        matches = [
            {
                "community": "sds",
                "from_user": "user1",
                "generator": "commonLettersGenerator",
                "match": "2022-07-25~IRbyUHik",
                "timestamp": 1659195146351,
                "users": ["user1", "user4"],
                "value": 4,
            },
            {
                "community": "sds",
                "from_user": "user1",
                "generator": "commonLettersGenerator",
                "match": "2022-07-25~IRbyUHik",
                "timestamp": 1659195148137,
                "users": ["user1", "user4"],
                "value": 4,
            },
            {
                "community": "sds",
                "from_user": "user1",
                "generator": "commonLettersGenerator",
                "match": "2022-07-25~IRbyUHik",
                "timestamp": 1659195148940,
                "users": ["user1", "user4"],
                "value": 4,
            },
            {
                "community": "sds",
                "from_user": "user2",
                "generator": "commonLettersGenerator",
                "match": "2022-07-18~bLOm2X7i",
                "timestamp": 1659395079238,
                "users": ["user3", "user2"],
                "value": 3,
            },
        ]
        # Step 2: Test Code
        actual = calculate_analytics(matches)
        # Step 3: Assert what we expect to be true
        expected = {"user1": 4, "user2": 3}
        self.assertEqual(actual, expected)

    def test_calculate_analytics_2(self):
        # Step 1: Initialize dependencies
        matches = [
            {
                "community": "sds",
                "from_user": "user1",
                "generator": "commonLettersGenerator",
                "match": "2022-07-25~IRbyUHik",
                "timestamp": 1659195146351,
                "users": ["user1", "user4"],
                "value": 4,
            },
            {
                "community": "sds",
                "from_user": "user1",
                "generator": "commonLettersGenerator",
                "match": "2022-07-25~IRbyUHik",
                "timestamp": 1659195148137,
                "users": ["user1", "user4"],
                "value": 4,
            },
            {
                "community": "sds",
                "from_user": "user1",
                "generator": "commonLettersGenerator",
                "match": "2022-07-25~IRbyUHik",
                "timestamp": 1659195148940,
                "users": ["user1", "user4"],
                "value": 4,
            },
        ]
        # Step 2: Test Code
        actual = calculate_analytics(matches)
        # Step 3: Assert what we expect to be true
        expected = {"user1": 4}
        self.assertEqual(actual, expected)
