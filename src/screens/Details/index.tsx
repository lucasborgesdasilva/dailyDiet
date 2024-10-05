import { MaterialIcons } from "@expo/vector-icons";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { useTheme } from "styled-components/native";

import { PrimaryButton } from "@components/PrimaryButton";
import { SecondaryButton } from "@components/SecondaryButton";
import type { MealProps } from "@storage/meal/mealCreate";
import { mealGetOne } from "@storage/meal/mealGetOne";
import { mealRemove } from "@storage/meal/mealRemove";

import {
  Container,
  ContainerModal,
  ContainerModalWrapper,
  Content,
  Dot,
  Header,
  Section,
  Subtitle,
  Title,
  TitleModal,
} from "./styles";

type RouteParams = {
  meal: MealProps;
};

export function Details() {
  const [details, setDetails] = useState<MealProps>();
  const [modalVisible, setModalVisible] = useState(false);

  const { goBack } = useNavigation();
  const { colors, fonts } = useTheme();
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  async function fetchDetails() {
    try {
      const details = await mealGetOne(meal);

      setDetails(details);
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível carregar as informações.");
    }
  }

  async function handleMealRemove(meal: string) {
    try {
      await mealRemove(meal);
      goBack();
    } catch (error) {
      Alert.alert(
        "Excluir Refeição",
        "Não foi possível remover essa refeição."
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDetails();
    }, [])
  );

  return (
    <Container type={details?.inDiet}>
      <ReactNativeModal
        isVisible={modalVisible}
        children={
          <ContainerModal>
            <TitleModal>
              Deseja realmente excluir o registro da refeição?
            </TitleModal>
            <ContainerModalWrapper>
              <SecondaryButton
                style={{ width: 135 }}
                title="Cancelar"
                onPress={() => toggleModal()}
              />
              <PrimaryButton
                style={{ width: 135 }}
                title="Sim, excluir"
                onPress={() => handleMealRemove(details?.name ?? "")}
              />
            </ContainerModalWrapper>
          </ContainerModal>
        }
      />
      <Header>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 29,
          }}
        >
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons
              style={{ marginLeft: 27, marginRight: 107 }}
              name="arrow-back"
              size={24}
              color={colors.gray[200]}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: fonts.family.bold,
              fontSize: Number(fonts.size.lg),
            }}
          >
            Refeição
          </Text>
        </View>
      </Header>
      <Content>
        <Section style={{ marginTop: 40 }}>
          <Title style={{ fontSize: 20 }}>{details?.name}</Title>
          <Subtitle>{details?.description}</Subtitle>
        </Section>
        <Section>
          <Title style={{ fontSize: 14 }}>Data e hora</Title>
          <Subtitle>
            {details?.date} às {details?.time}
          </Subtitle>
        </Section>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            backgroundColor: colors.gray[600],

            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 999,
          }}
        >
          <Dot color={details?.inDiet} />
          <Text>{details?.inDiet ? "dentro da dieta" : "fora da dieta"}</Text>
        </View>
      </Content>
      <View
        style={{ position: "absolute", left: 25, bottom: 40, width: "85%" }}
      >
        <PrimaryButton
          icon="drive-file-rename-outline"
          title="Editar refeição"
          style={{ marginBottom: 9 }}
        />
        <SecondaryButton
          icon="delete-outline"
          title="Excluir refeição"
          onPress={() => toggleModal()}
        />
      </View>
    </Container>
  );
}
