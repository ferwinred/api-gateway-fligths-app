export enum MailQueue {
    UserQueue = 'users',
    PassengerQueue = 'passengers',
    FlightQueue = 'flights',
  }

  export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER',
  }

  export enum PassengerMSG {
    CREATE = 'CREATE_PASSENGER',
    FIND_ALL = 'FIND_PASSENGERS',
    FIND_ONE = 'FIND_PASSENGER',
    UPDATE = 'UPDATE_PASSENGER',
    DELETE = 'DELETE_PASSENGER',
  }
  
  export enum FlightMSG {
    CREATE = 'CREATE_FLIGHT',
    FIND_ALL = 'FIND_FLIGHTS',
    FIND_ONE = 'FIND_FLIGHT',
    UPDATE = 'UPDATE_FLIGHT',
    DELETE = 'DELETE_FLIGHT',
    ADD_PASSENGER = 'ADD_PASSENGER',
  }

  export enum WeatherStateAbbr {
    C = 'c',
    Hc = 'hc',
    Lc = 'lc',
    Lr = 'lr',
    S = 's',
  }
  
  export enum WeatherStateName {
    Clear = 'Clear',
    HeavyCloud = 'Heavy Cloud',
    LightCloud = 'Light Cloud',
    LightRain = 'Light Rain',
    Showers = 'Showers',
  }
  
  export enum WindDirectionCompass {
    False = 'False',
    N = 'N',
    Nne = 'NNE',
    Nw = 'NW',
    Wsw = 'WSW',
  }
  