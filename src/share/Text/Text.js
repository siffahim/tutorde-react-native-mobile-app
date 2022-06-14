import { StyleSheet, Text as RnText } from 'react-native';
import { presets } from './text.preset';

const Text = ({ children, preset = 'default', style }) => {
    const styleText = StyleSheet.compose(presets[preset], style)
    return (
        <RnText style={styleText}>
            {children}
        </RnText>
    );
};

export default Text;