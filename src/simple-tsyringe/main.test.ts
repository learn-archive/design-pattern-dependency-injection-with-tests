import 'reflect-metadata';

import { container } from 'tsyringe';
import { createMock } from '../mock';
import { main } from './main';
import { App } from './services/app';
import { Database } from './services/database';
import { Logger } from './services/logger';

describe('main unit', () => {
  let mockLogger: ReturnType<typeof createMock<Logger>>;
  let realDatabase: Database;
  let mockApp: App;

  beforeEach(() => {
    mockLogger = createMock<Logger>();
    realDatabase = new Database(mockLogger);
    mockApp = new App(realDatabase, mockLogger);

    // Mock the container to return our App instance with mocked dependencies
    jest.spyOn(container, 'resolve').mockReturnValue(mockApp);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should resolve App from container and execute it', () => {
    // Given
    // When
    main();

    // Then
    expect(container.resolve).toHaveBeenCalledWith(App);
  });

  test('should call Logger.info with "Hello world !" when main is executed', () => {
    // Given
    // When
    main();

    // Then
    expect(mockLogger.info).toHaveBeenCalledWith('Hello world !');
  });

  test('should call Database.connect when main is executed', () => {
    // Given
    const connectSpy = jest.spyOn(realDatabase, 'connect');

    // When
    main();

    // Then
    expect(connectSpy).toHaveBeenCalledTimes(1);
  });

  test('should call Logger.info with "connected to database !" when Database.connect is called', () => {
    // Given
    // When
    main();

    // Then
    expect(mockLogger.info).toHaveBeenCalledWith('connected to database !');
  });

  test('should call Logger.info twice - once for App and once for Database', () => {
    // Given
    // When
    main();

    // Then
    expect(mockLogger.info).toHaveBeenCalledTimes(2);
    expect(mockLogger.info).toHaveBeenNthCalledWith(1, 'Hello world !');
    expect(mockLogger.info).toHaveBeenNthCalledWith(2, 'connected to database !');
  });
});
