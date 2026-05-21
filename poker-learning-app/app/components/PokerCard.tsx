import { View, Text } from 'react-native';

import { Card } from '../types/poker';

interface PokerCardProps {
    card: Card;
}

export function PokerCard({
    card,
}: PokerCardProps) {
    const isRed =
        card.suit === 'H' || card.suit === 'D';

    return (
        <View
            style={{
                width: 70,
                height: 100,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 8,
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: '#ccc',
            }}
        >
            <Text
                style={{
                    color: isRed ? 'red' : 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}
            >
                {card.rank}
            </Text>

            <Text
                style={{
                    color: isRed ? 'red' : 'black',
                    fontSize: 28,
                    alignSelf: 'center',
                }}
            >
                {getSuitSymbol(card.suit)}
            </Text>

            <Text
                style={{
                    color: isRed ? 'red' : 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                }}
            >
                {card.rank}
            </Text>
        </View>
    );
}

function getSuitSymbol(suit: string) {
    switch (suit) {
        case 'H':
            return '♥';

        case 'D':
            return '♦';

        case 'C':
            return '♣';

        case 'S':
            return '♠';

        default:
            return '?';
    }
}
