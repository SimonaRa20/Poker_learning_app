import { View, Text } from 'react-native';

export function HomeScreen() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#0B1215',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 'bold',
                }}
            >
                Poker Learning App
            </Text>
        </View>
    );
}
