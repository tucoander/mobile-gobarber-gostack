import React, { useRef } from 'react';
import { 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  View, 
  ScrollView, 
  TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { 
  Container, 
  Title, 
  BackToSignInButton, 
  BackToSignInButtonText
} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView 
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container>
            <Image source={logoImg}></Image>
            <View>
              <Title>Crie sua conta</Title>
            </View>
            
            <Form ref={formRef} onSubmit={()=>{}}>
              <Input 
                autoCapitalize="words"
                name="name" 
                icon="user" 
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={ () => {
                  inputEmailRef.current?.focus();
                }}
              />
              <Input
                ref={inputEmailRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email" 
                icon="mail" 
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={ () => {
                  inputPasswordRef.current?.focus();
                }}
              />
              <Input 
                ref={inputPasswordRef}
                secureTextEntry
                name="password" 
                icon="lock" 
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={ ()=> { formRef.current?.submitForm(); }}
              />
              <Button onPress={ ()=> { formRef.current?.submitForm(); } }>Entrar</Button>
            </Form>
           
          
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      
      <BackToSignInButton onPress={ ()=> navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff"></Icon>
        <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
      </BackToSignInButton>
    </>
    )
};

export default SignUp;