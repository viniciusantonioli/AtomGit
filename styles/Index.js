import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 body: {
   flex: 1,
   backgroundColor: '#fffdfd'
 },
 title: {
   textAlign: 'center',
   justifyContent: 'center',
   color: '#333a56',
   fontSize: 35,
   marginTop: 50,
   marginBottom: 10
 },
 description: {
   textAlign: 'center',
   justifyContent: 'center',
   color: '#333a56',
   fontSize: 16,
   marginBottom: 20
 },
 repoContainer: {
   marginLeft: 20,
   marginRight: 20,
   marginTop: 8,
   marginBottom: 8,
   padding: 20,
   backgroundColor: '#52658f',
   borderRadius: 4
 },
 repoTitle: {
   color: '#FFF',
   fontSize: 22
 },
 repoVersion: {
   color: '#FFF',
   fontSize: 10
 },
 repoDescription: {
   color: '#FFF',
   fontSize: 14
 },
 repoAccess: {
   backgroundColor: '#333a56',
   margin: 20,
   borderRadius: 5
 },
 repoAccesText: {
   color: '#FFF',
   textAlign: 'center',
   justifyContent: 'center',
   margin: 15,
   fontSize: 17
 },
});

export default styles;
