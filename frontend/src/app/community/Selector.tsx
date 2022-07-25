import React from 'react'

import { CommunityData } from '../../config/communities'

export interface CommunitySelectorProps {
    communities: Array<CommunityData>
    selected: string | undefined
    setCommunityId(string): void
}

export function CommunitySelector({
    communities = [],
    selected,
    setCommunityId,
}: CommunitySelectorProps) {
    return (
        <div className="CommunitySelector">
            {communities.length > 0 && (
                <select onChange={(e) => setCommunityId(e.target.value)} value={selected || ''}>
                    {communities.map((community) => (
                        <option value={community.id} key={community.id}>
                            {community.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}
