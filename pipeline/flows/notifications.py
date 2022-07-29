from typing import Dict

import prefect
from prefect import Flow, Parameter


def notifications_flow(defaults: Dict = {}) -> Flow:
    with Flow(name="notification_flow") as flow:
        # Retrieve pipeline parameters
        param_community = Parameter(
            name="community",
            default=defaults.get("community"),
            required=True,
        )
    """
     1st Task: Extract chat data for the community in current release

     * Will contain messages and information about the match

     * David is working on implementing this; add it to flow once he's finished
    """
    # TODO: add chat data extraction

    """2nd Task: Extract user in the community"""
