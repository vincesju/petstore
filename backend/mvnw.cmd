@echo off
setlocal
set MVNW_REPOURL=https://repo.maven.apache.org/maven2
set MVNW_VERSION=3.9.6
set MVNW_BASEDIR=%~dp0
set MVNW_JAR=%MVNW_BASEDIR%\.mvn\wrapper\maven-wrapper.jar

if not exist "%MVNW_JAR%" (
  echo Downloading Maven Wrapper...
  mkdir "%MVNW_BASEDIR%\.mvn\wrapper" 2>nul
  powershell -Command "Invoke-WebRequest -Uri https://repo.maven.apache.org/maven2/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar -OutFile '%MVNW_JAR%'"
)

set MAVEN_WRAPPER_JAR=%MVNW_JAR%
set MAVEN_WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

set MAVEN_PROJECTBASEDIR=%MVNW_BASEDIR%

set JAVA_EXE=java

"%JAVA_EXE%" -jar "%MAVEN_WRAPPER_JAR%" %*
endlocal
