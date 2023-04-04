import { ContainerColorByDiet } from '@components/Status/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { Container, IconType } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap | undefined;
  type?: ContainerColorByDiet 
}

export function Icon({ icon, type = 'GOOD', ...rest}: Props) {
  return (
    <Container {...rest}>
      <IconType name={icon} type={type} />
    </Container> 
  )
}