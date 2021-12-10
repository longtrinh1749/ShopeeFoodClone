FROM openjdk:12-jdk-alpine3.8
COPY target/image-service-1.0-SNAPSHOT.jar image-service-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom"]