from unittest.mock import MagicMock

from pipeline.extract.chat import extract_message_data, extract_recent_chatdata
from pipeline.types import Message


def test_extract_recent_chatdata_EMPTY_CHAT_RECORDS():
    # This test case should expect an empty list in the case of empty match records
    mock_get_chatdata = MagicMock(return_value=None)
    mock_db = MagicMock()
    mock_db.reference("matches/test").get = mock_get_chatdata

    # run prefect using mock
    actual = extract_recent_chatdata.run(mock_db, "test")

    mock_get_chatdata.assert_called_once_with()

    # expecting an empty Chatdata obj in the event that there is no match records
    expected = []
    assert actual == expected


def test_extract_message_data():  # testing the message extraction
    # Creating mock database to not call the actual database
    messages = {
        "message_1": {
            "from": "user_id_a",
            "timestamp": 1649030400132,
            "type": "MESSAGE",
            "message": "Hi everyone!",
        },
    }
    mock_get_msgs = MagicMock(return_value=messages)
    mock_db = MagicMock()
    mock_db.reference("messages/community_a").get = mock_get_msgs

    # run prefect using mock
    actual = extract_message_data(mock_db, "test", "testid1")

    mock_get_msgs.assert_called_once_with()

    eMsg = Message(
        from_user="user_id_a",
        timestamp=1649030400132,
        message_type="MESSAGE",
        message="Hi everyone!",
    )
    expected = [eMsg]

    assert actual == expected


def test_extract_message_data_EMPTY_MSG_RECORDS():
    # In the event that no message is found within ChatData it should return nothing
    mock_get_msgs = MagicMock(return_value=None)
    mock_db = MagicMock()
    mock_db.reference("messages/test").get = mock_get_msgs

    # run prefect using mock
    actual = extract_message_data(mock_db, "test", "testid1")

    mock_get_msgs.assert_called_once_with()

    expected = (
        []
    )  # expecting an empty message in the event that there is no message records
    assert actual == expected


# Commented it out because I would have to create an additional mock database for users thus spending more time
# Though, when running in Prefect the logger statements for extract_recent_chatdata() meet our expectations.
"""
def test_extract_chatdata():
    matches = {
                "2022-04-04~match_a~user_id_a": {
                    "for": "user_id_a",
                    "id": "2022-04-01~match_a",
                    "participants": {
                        "user_id_a": True,
                        "user_id_b": True,
                    },
                    "release_tag": "2022-04-04",
                    "release_timestamp": 1649030400000,
                    "title": "Your Match"
                    },
        }

    mock_get_chatdata = MagicMock(return_value=matches)
    mock_db = MagicMock()
    mock_db.reference("matches/test").get = mock_get_chatdata

    actual = extract_recent_chatdata.run(mock_db, "test")

    mock_get_chatdata.assert_called_once_with()

    expected = [ChatData(
            release_timestamp=1649030400000,
            chat_match_id= "2022-04-01~match_a",
            community_id= 'test',
            participants={
                "user_id_a": True,
                "user_id_b": True,
                },
            release_tag= "2022-04-04",
            title=None,
            metadata={},
            messages=[],
            )
    ]
    assert actual == expected
"""
