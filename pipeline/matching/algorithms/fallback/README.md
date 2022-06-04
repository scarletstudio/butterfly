# Design: Fallback Matching Algorithm

The fallback algorithm is designed to be a final step in the matching engine, to ensure that every user gets a match, preferably one they have not been matched to recently.

## Tiers of Matches

Three tiers of matches, in descending order of preference:

- Tier 1: Match to a member with a special reason
- Tier 2: Match to a member who was not a recent match
- Tier 3: Match to another member in the community

## Algorithm

Three passes through the matching system:

1. Generate, rank, and select Tier 1 matches
2. Select Tier 2 matches for remaining members
3. Select Tier 3 matches for remaining members

Passes 2 and 3 could be combined by considering any match, but giving
preference to matches that have not been matched recently.

## Notes

- For an odd number of members, there will be at least one group of three
