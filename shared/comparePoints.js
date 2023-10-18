export function comparePoints(a, b) {
    const score1 = a.fantasy_points_ppr
    const score2 = b.fantasy_points_ppr
    let comparison = 0;

    if (score1 > score2) {
        comparison = -1;
    } else if (score1 < score2) {
        comparison = 1;
    }
    return comparison;

}