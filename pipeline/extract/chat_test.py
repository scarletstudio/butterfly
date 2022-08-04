from unittest.mock import MagicMock

from pipeline.extract.chat import extract_message_data, extract_recent_chatdata


def test_extract_chatdata():
    pass


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


"""
def test_extract_message_data():  # testing the message extraction
    # Creating mock database to not call the actual database
    messages = {
        "testid1": {
            "msg1": {
                "from": "user_id_a",
                "timestamp": 1649030400132,
                "type": "MESSAGE",
                "message": "Hi everyone!",
            },
            "msg2": {
                "from": "user_id_b",
                "timestamp": 1649030400783,
                "type": "MESSAGE",
                "message": "How's it going?",
            },
        }
    }
    mock_get_msgs = MagicMock(return_value=messages)
    mock_db = MagicMock()
    mock_db.reference("messages/test").get = mock_get_msgs

    # run prefect using mock
    actual = extract_message_data(mock_db, "test", "testid1")
    # actual = actual_df.to_dict(orient="records")

    mock_get_msgs.assert_called_once_with()

    eMsg = Message(
        from_user="user_id_a",
        timestamp=1649030400132,
        message_type="MESSAGE",
        message="Hi everyone!",
    )
    expected = [eMsg]

    assert actual == expected
"""


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
