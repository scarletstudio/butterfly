# Design: Matching Engine

The matching engine produces a match for each user in the input.

## Definitions

- Community: a group of people who use Butterfly
- Release: a period of time, usually one week
- User: a member of one or more communities
- Match: a pair (or sometimes triad) of users grouped together during a release

## Requirements

- Every user is included in exactly one match
- When there is an odd number of users, exactly one match has three users
- All other matches have exactly two users
- Every match has an identifier that is unique within its community and release

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
