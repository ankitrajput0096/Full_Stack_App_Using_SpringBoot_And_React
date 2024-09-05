# Full Stack Application Using Spring Boot and React

Full Stack Application using Spring boot and React

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. See running for notes on how to run the project on a system.

### Prerequisites

#### Method 1: Installing individual dependencies
1. Clone the project to your local environment:
    ```
    git clone https://github.com/ankitrajput0096/Full_Stack_App_Using_SpringBoot_And_React
    ```
2. You need maven installed on your environment:

    #### Mac (homebrew):
    
    ```
    brew install maven
    ```
    #### Ubuntu:
    ```
    sudo apt-get install maven
    ```

3. You need npm to be installed:

    #### Get npm from here:
    ```
    https://www.npmjs.com/get-npm
    ```

#### Method 2: Installing docker 
1. You need Docker to be installed:

    #### Windows:
    https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe
    
    #### Mac:
    https://download.docker.com/mac/stable/Docker.dmg
    
    #### Ubuntu:
    https://docs.docker.com/install/linux/docker-ce/ubuntu/

### Installing

#### Method 1
Once you have maven and npm installed on your environment, install the project dependencies via:

1. Using terminal, go into `react_app` folder and perform these actions:

    #### Installing dependencies:

    ```
    npm install
    ```

    #### To Bundle App for Prod Environment:

    ```
    npm run start
    ```

2. Using terminal, go into `springboot_app` folder and perform these actions:

    #### Installing dependencies:

    ```
    mvn install
    ```

#### Method 2
Once you have docker installed on your environment, install the project dependencies via:

Build docker Image:

```
docker-compose build
```

Start docker:

```
docker-compose up
```

## Running

### Method 1

#### 1) Using terminal, go into `react_app` folder and perform these actions to run front-end application:

1. Start App in Dev Environment:

   ```
   npm run dev
   ```

   Your application should be now running on http://localhost:9000


2. Start App in Prod Environment:

   ```
   npm run fireTheProd
   ```

   Your application should be now running on http://localhost:9090

#### 2) Using terminal, go into `springboot_app` folder and perform these actions to run backend application:

   Run the application from the `Application.java` main method directly,
   or from a command line:

   ```
   mvn spring-boot:run
   ```

   Your server should be now running on http://localhost:8080

### Method 2

Start docker:
```
docker-compose up
```

Your application should be now running on http://localhost:8082

## Built With

* [React](https://reactjs.org/) - React
* [WebPack](https://webpack.js.org/) - WebPack
* [Babel](https://babeljs.io/) - Babel
* [Express](https://expressjs.com/) - ExpressJS
* [Spring Boot](https://spring.io/projects/spring-boot) - Spring Boot 2
* [Maven](https://maven.apache.org/) - Dependency Management

## Contributing

If you have any improvement suggestions please create a pull request and I'll review it.


## Authors

* **Ankit Rajput** - *Initial work* - [Github](https://github.com/ankitrajput0096)

## License

This project is licensed under the MIT License

## Acknowledgments

* Big thanks to facebook for React and Pivotal for Spring Boot framework.
