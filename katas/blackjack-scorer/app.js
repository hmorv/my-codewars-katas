function scoreHand(cards) {
    function getHandNoAces(cards) {
        const FIGURE_VALUE = 10;
        const FIGURES = ['J','Q','K'];
        let points = 0;

        cards.forEach((card) => {
            if (isNaN(+card)) {
                if (FIGURES.includes(card)) {
                    points+=FIGURE_VALUE;
                }
            } else {
                points += +card;
            }
        });
        
        return points;
    }
    function getBestHand() {
        const BLACK_JACK = 21;
        const handsExcess = [];
        const handsDefect = [];
        const aces = cards.filter(card => card === 'A').length;
        let pointsNoAces = getHandNoAces(cards);

        for (let i = 0; i <= aces; i++) {
            let acesCurrentPoints = 1*(aces-i)+ 11*i;
            let totalPoints = acesCurrentPoints + pointsNoAces;
            
            if (totalPoints <= BLACK_JACK) {
                handsDefect.push(totalPoints);
            } else {
                handsExcess.push(totalPoints);
            } 
        }

        let bestHandDefect = handsDefect.length ? Math.max(...handsDefect) : 0;
        let bestHandExcess = handsExcess.length ? Math.min(...handsExcess) : 0;
        
        return bestHandDefect === 0 ? bestHandExcess : bestHandDefect; 
    }
   
    return cards.filter(card => card === 'A').length ? getBestHand(cards) : getHandNoAces(cards);
}
