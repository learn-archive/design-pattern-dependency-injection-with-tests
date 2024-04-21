import { module } from '../module';
import { JsonService, JsonServicePersonSymbol, JsonServiceSymbol, Person } from './json-service';

describe('main unit', () => {
  let jsonService: JsonService;
  const mockPerson: Person = { name: 'John Doe', age: 30 };

  beforeEach(() => {
    // jsonService = new JsonService(mockPerson);
    module.bind<Person>(JsonServicePersonSymbol).toConstantValue(mockPerson);
    jsonService = module.get<JsonService>(JsonServiceSymbol);
  });

  test('should hit', async () => {
    // Given
    // When
    const response = jsonService.getPersonName();
    console.log('DEBUG: ', response);

    // Then
    expect(response).toEqual('hit!'); // true
  });
});
