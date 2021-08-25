import CreatePeople from '../../components/CreatePeople/CreatePeople';
import ShowPeople from './../../components/ShowPeople/ShowPeople';
import useLocalStorage from './../../helpers/useLocalStorage';

interface IProps {
  message?: string;
}

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const Home: React.FC<IProps> = (): JSX.Element => {
  // const [people, setPeople] = useState<IState['people']>(new Array());

  const defaultPeople: IState['people'] = [];
  const [people, setPeople] = useLocalStorage('people', defaultPeople);

  return (
    <div>
      <h1>people in my list</h1>
      <ShowPeople people={people} />
      <hr />
      <CreatePeople people={people} setPeople={setPeople} />
    </div>
  );
};

export default Home;
