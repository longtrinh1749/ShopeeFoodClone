FROM openjdk:12-jdk-alpine3.8
COPY target/gateway-0.0.1-SNAPSHOT.jar gateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom"]