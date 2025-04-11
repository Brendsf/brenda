import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Button, Text, Avatar, ListItem } from '@rneui/themed';

const Stack = createNativeStackNavigator();


function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Avatar
        size="large"
        rounded
        source={{ uri: 'https://img.freepik.com/vetores-gratis/circulo-azul-com-usuario-branco_78370-4707.jpg' }} 
        containerStyle={styles.avatarLogin}
      />
      <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' />
      <Input placeholder='Senha' secureTextEntry />
      <Button
        title='Entrar'
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('ListaUsuarios')}
      />
      <Button
        title='Cadastrar'
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}


function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Input placeholder='Nome' />
      <Input placeholder='CPF' />
      <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' />
      <Input placeholder='Senha' secureTextEntry />
      <Button
        title='Cadastrar'
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


function CadastroContato({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Contato</Text>
      <Input placeholder='Nome' />
      <Input placeholder='Email' />
      <Input placeholder='Número' />
      <Button
        title='Cadastrar'
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('ListaUsuarios')}
      />
    </View>
  );
}


function ListaUsuarios({ navigation }) {
  const list = [
    {
      name: 'Breno Paiva',
      avatar_url: 'https://i.pinimg.com/736x/a9/3d/df/a93ddffb801358d9a301a154379d4ad5.jpg',
      numero: '81988250153',
      email: 'breno@gmail.com' 
    },
    {
      name: 'Vaneska Farias',
      avatar_url: 'https://i.pinimg.com/564x/c6/9a/13/c69a13d097873c9f3f8d9212e82f623f.jpg',
      numero: '81985291020',
      email: 'vaneska@gmail.com' 
    },
    {
      name: 'Bella Farias',
      avatar_url: 'https://i.pinimg.com/474x/70/74/5c/70745cb1346e0443cd638859b741185e.jpg',
      numero: '819852915252',
      email: 'bella@gmail.com' 
    },
  ];
  
  return (
    <View style={styles.container}>
      {list.map((l, i) => (
        <ListItem 
          key={i} 
          bottomDivider
          onPress={() => navigation.navigate('AlterarContato', {
            nome: l.name,          
            email: l.email,        
            telefone: l.numero  
          })}
        >
          <Avatar size={48} rounded source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.numero}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <Button
        title='Adicionar Contato'
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('ContatoCadastro')}
      />
    </View>
  );
}


function AlterarContato({ route, navigation }) {
  const { nome, email, telefone } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Contato</Text>
      <Input
        placeholder='Nome'
        value={nome || ''}  
      />
      <Input
        placeholder='Email'
        value={email || ''} 
      />
      <Input
        placeholder='Número'
        value={telefone || ''} 
      />
      <Button
        title='Salvar'
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('ListaUsuarios')}
      />
      <Button
        title='Excluir'
        buttonStyle={[styles.button, { backgroundColor: '#e53935' }]}
        onPress={() => navigation.navigate('ListaUsuarios')}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="ContatoCadastro" component={CadastroContato} options={{ title: 'Cadastrar Contato' }} />
        <Stack.Screen name="ListaUsuarios" component={ListaUsuarios} options={{ title: 'Lista de Contatos' }} />
        <Stack.Screen name="AlterarContato" component={AlterarContato} options={{ title: 'Editar Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  avatarLogin: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    color: '#546e7a',
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#78909c',
    borderRadius: 4,
  },
});

export default App;