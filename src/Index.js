/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Alert, Linking, TouchableOpacity, TouchableHighlight, ScrollView, Text, View, Button } from 'react-native';
 import styles from '../styles/Index';

 import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
 import { faCoffee } from '@fortawesome/free-solid-svg-icons';

 export default class App extends Component {
   render() {
     return (
       <ScrollView style={styles.body}>
       <Text style={styles.title}>Repositórios</Text>
       <Text style={styles.description}>Listando projetos da Atom Dynamics S. E.</Text>

       <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://github.com/tonymtk/AtomGit')}}>
       <View style={styles.repoContainer}>
         <Text style={styles.repoTitle}>AtomGit</Text><Text style={styles.repoVersion}>v1.0</Text>
         <Text style={styles.repoDescription}>Aplicação móvel nativa multiplataforma projetada em React Native exclusivamente para ceder acesso rápido aos repositórios da empresa.</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://github.com/tonymtk/private-shield')}}>
       <View style={styles.repoContainer}>
         <Text style={styles.repoTitle}>PrivateShield</Text><Text style={styles.repoVersion}>v2.0</Text>
         <Text style={styles.repoDescription}>Versão didática do software desktop para Windows desenvolvido em Visual Basic com objetivo de escanear a máquina à procura de softwares maliciosos para proteger softwares terceiros (anti-cheat).</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://github.com/tonymtk/cne52-algorithm')}}>
       <View style={styles.repoContainer}>
         <Text style={styles.repoTitle}>CNE52</Text><Text style={styles.repoVersion}>v1.0</Text>
         <Text style={styles.repoDescription}>Algoritmo simples desenvolvido em Python para calcular notas escolares.</Text>
       </View>
       </TouchableOpacity>

       <TouchableHighlight style={styles.repoAccess} underlayColor='#e8e8e8' onPress={() => alert('A Atom Cloud ainda está em desenvolvimento!')}><Text style={styles.repoAccesText}>Ir para a Atom Cloud</Text>
       </TouchableHighlight>

       </ScrollView>
     );
   }
 }
