import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Cliente from '../components/Cliente';
import Empleado from '../components/Empleado';
import Proveedor from '../components/Proveedor';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Cliente
        nombre='Brayan'
        apellido='Smith'
        telefono='3102837443'
        email='brayan@gmail.com'
        puesto=''
        empresa=''
        />
        <Empleado
        nombre='Jhon'
        apellido='Caviedes'
        telefono='3187239908'
        puesto='Caja'
        email=''
        empresa=''
        />
        <Proveedor
        nombre='Jhon'
        apellido='Molina'
        telefono='3102350343'
        empresa='Apple'
        email=''
        puesto=''
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
