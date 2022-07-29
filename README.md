# Free Now Automation Assignment-Backend Framework cucumber-rest-assured-extentreports
This is a Backend automation Framework Project using below stacks.
1.JAVA
2.REST-ASSURED
3.CUCUMBER FRAMEWORK(BDD type)
4.EXTENT REPORTING

**Task Accomplished:**
FreeNow - Backend Test Challenge
BaseURI: https://jsonplaceholder.typicode.com/

The task is to perform the validations for the comments for the post made by a specific  user. 
Search for the user.
Use the details fetched to make a search for the posts written by the user.
For each post, fetch the comments and validate if the emails in the comment  section are in the proper format.


## Table of Contents (Optional)
- [Preconditions](#Preconditions)
- [MAVEN_Dependencies](#MAVEN_Dependencies)
- [SetUp](#SetUp)
- [Add_features_and_respective_step_definitions](#Add_features_and_respective_step_definitions)
---

## Preconditions
```bash
- Maven 
- Java 1.8
-IDE(IntelliJ 2022.* Version)
- Cucumber IntelliJ plugin
```

## MAVEN_Dependencies
Add the following dependencies to your `pom.xml`
All below dependencies are compatible.

```maven
<dependency>
	<groupId>com.vimalselvam</groupId>
	<artifactId>testng-extentsreport</artifactId>
	<version>1.3.1</version>
</dependency>
<dependency>
	<groupId>com.vimalselvam</groupId>
	<artifactId>cucumber-extentsreport</artifactId>
	<version>3.0.2</version>
</dependency>
<dependency>
	<groupId>info.cukes</groupId>
	<artifactId>cucumber-jvm-deps</artifactId>
	<version>1.0.5</version>
	<scope>provided</scope>
</dependency>
<dependency>
	<groupId>info.cukes</groupId>
	<artifactId>cucumber-junit</artifactId>
	<version>1.2.5</version>
	<scope>test</scope>
</dependency>
<dependency>
	<groupId>info.cukes</groupId>
	<artifactId>cucumber-java</artifactId>
	<version>1.2.5</version>
</dependency>
<dependency>
	<groupId>com.aventstack</groupId>
	<artifactId>extentreports</artifactId>
	<version>3.1.2</version>
</dependency>
```
## SetUp
- Configure `extent-config.xml`
```
<?xml version="1.0" encoding="UTF-8"?>
<extentreports>
	<configuration>
		<!-- report theme --> <!-- standard, dark -->
		<theme>dark</theme>

		<!-- document encoding -->  <!-- defaults to UTF-8 -->
		<encoding>UTF-8</encoding>

		<!-- protocol for script and stylesheets -->   <!-- defaults to https -->
		<protocol>https</protocol>

		<!-- title of the document -->
		<documentTitle>Free Now Assignment</documentTitle>

		<!-- report name - displayed at top-nav -->
		<reportName>BDD Framework Extent Report</reportName>

		<!-- global date format override -->  <!-- defaults to yyyy-MM-dd -->
		<dateFormat>yyyy-MM-dd</dateFormat>

		<!-- global time format override -->   <!-- defaults to HH:mm:ss -->
		<timeFormat>HH:mm:ss</timeFormat>

		<!-- custom javascript -->
		<scripts>
      <![CDATA[
        $(document).ready(function() {
        
        });
      ]]>
		</scripts>

		<!-- custom styles -->
		<styles>
      <![CDATA[
        
      ]]>
		</styles>
	</configuration>
</extentreports>
```

- create a runner class for cucumber project

- Run with tags. Here I have added @get tags.

```java
import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty" }, features = "src//test//java//com//factory//cucumber//features", glue = {
		"com.factory.cucumber.stepdefinitions" }, tags = { "@get" }, plugin = {
				"com.cucumber.listener.ExtentCucumberFormatter:src/test/reports/cucumber_report.html",
				"html:output/html-report" }, monochrome = true)
public class RunCucumberTest {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src//test//java//com//factory//cucumber//configuration//extent-config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 10");
		Reporter.setTestRunnerOutput("Sample test runner output message");
	}

}
```
## Add_features_and_respective_step_definitions

@get
Scenario Outline: Validate the response code for the users endpoint
    Given I want to set resource URL as "<URL>" to the baseURI
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | URL    | ContentType      | RequestBody | RequestMethod | StatusCode |
      | /users | application/json |             | GET           |        200 |


**How to start the execution**
1. First of all we need to open the project on IDE and load maven changes by importing all the dependencies 
from pom.xml file.
2.Add the cucumber plugin to the IDE.
3.Select the Project SDK to 1.8.
4.Right click on the src/test/java/com/stepdefinitions/RunCucumberTest class.
5.It will set up the configuration automatically and execution will start.

   

**Extent HTML Test Report**
	
	After execution,User can navigate to below URL for HTML test report.
	
	URL:http://localhost:63342/cucumber-rest-assured-extentreports-master/cucumber-api/src/test/reports/cucumber_report.html?_ijt=emof18cv8vh18bq46vndabe5i5
	

**Reason to choose BDD Framework**
	
BDD is framework type which can be easily understandable by tech and non tech team.This is easy beacuse the tests are 
written in plain text.

The main advantage of BDD is the low jargon and clearer approach which is easier to understand.

I choosed Cucumber-A BDD Framework tool.
PFB advantages for this framework.
1.Coverage of User Stories
2.Clarity of Scenarios
3.Automation of Test Scenarios
4.Code Reuse in Framework
5.Parameterization in Feature File

