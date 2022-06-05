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

## Components

A matching engine is composed of these components:

- Generators: Propose new matches
- Rankers: Order matches by priority
- Finalizers: Ensure that all users get a match

Technically, an engine only supports one ranker and one finalizer. If you want
to use multiple rankers, you can write a single ranker that calls the others and
use that ranker in your engine.

## Algorithm

1. Run each generator to propose matches
2. Rank all proposed matches
3. Assign proposed matches in priority order until there are none left
   - Only assign matches for users who do not yet have a match
4. Finalize matches for all remaining users

## Development Notes

- Matching engines follow the same interface, allowing developers to create many
- Matching engines can run in a regular Python environment, for simple execution
