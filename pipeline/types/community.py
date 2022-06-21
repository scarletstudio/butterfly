from typing import Dict

Community = str

# Dict with keys:
# - active (boolean)
# - joined (timestamp in ms)
CommunityMembership = Dict

UserCommunityMemberships = Dict[Community, CommunityMembership]
