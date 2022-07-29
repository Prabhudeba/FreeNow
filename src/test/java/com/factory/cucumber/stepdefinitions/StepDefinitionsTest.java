package com.factory.cucumber.stepdefinitions;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;
import com.aventstack.extentreports.Status;
import com.cucumber.listener.Reporter;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class StepDefinitionsTest {
    private final static Logger logger = Logger.getLogger(StepDefinitionsTest.class.getName());
    public static String apiEndPointUri;
    public static String CONTENT_TYPE;
    public static String STATUS_CODE;
    public static String FILE_PATH;
    public static String REQUESTBODY;
    public static String RESPONSEBODY;
    public static Response response;


    @Given("I want to set resource URL as \\\"([^\"]*)\\\" to the baseURI")
    public void setAPIEndpointURL(String URL) {
        String apiHostName = "https://jsonplaceholder.typicode.com";
        apiEndPointUri = String.format("%s%s", apiHostName, URL);
        Reporter.addStepLog(Status.PASS + " :: Cucumber Hostname URL is :: " + apiEndPointUri);
        logger.info("Cucumber Hostname URL is :: " + apiEndPointUri);
    }

    @When("^I set header content type as \"([^\"]*)\"$")
    public void setHeader(String contentType) {
        if (contentType != null && !contentType.isEmpty()) {
            CONTENT_TYPE = contentType;
            Reporter.addStepLog(Status.PASS + " :: content type is :: " + CONTENT_TYPE);
            logger.info("Content type is :: " + CONTENT_TYPE);
        } else {
            Reporter.addStepLog(Status.FAIL + " :: content type cannot be null or empty!");
            logger.info("Content type cannot be null or empty!");
        }
    }

    @And("^I hit the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\"$")
    public void submitRequest(String requestBodyPath, String requestType) throws Throwable {
        RestAssured.baseURI = apiEndPointUri;
        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", CONTENT_TYPE);
        if (requestBodyPath != null && !requestBodyPath.isEmpty() && requestType.equalsIgnoreCase("POST")
                || requestType.equalsIgnoreCase("PUT")) {
            JSONParser jsonParser = new JSONParser();
            FILE_PATH = System.getProperty("user.dir") + "//src//test//java//com//factory//cucumber//"
                    + requestBodyPath;
            logger.info("Path of requestbody file is :: " + FILE_PATH);
            try (FileReader reader = new FileReader(FILE_PATH)) {
                Object obj = jsonParser.parse(reader);
                REQUESTBODY = obj.toString();
                logger.info("Request Body is :: " + REQUESTBODY);
            } catch (FileNotFoundException | ParseException exc) {
                exc.printStackTrace();
            }
            if (REQUESTBODY.length() > 0) {
                request.body(REQUESTBODY);
                response = request.post();
            } else {
                Reporter.addStepLog(Status.FAIL + " :: Request Body cannot be null or empty!");
                logger.info(" Request Body cannot be null or empty!");
            }
        } else if (requestType.equalsIgnoreCase("GET")) {
            response = request.get();
        }
        STATUS_CODE = String.valueOf(response.getStatusCode());
        RESPONSEBODY = response.getBody().asString();
        Reporter.addStepLog(Status.PASS + " :: Request successfully processed");
        Reporter.addStepLog("Response is :: " + RESPONSEBODY);
    }


    @Then("^verify the \"([^\"]*)\" is present on the userlist output")
    public static void verifySearchedUserName(String value) throws Throwable {
        List<Object> userList = com.jayway.jsonpath.JsonPath.parse(RESPONSEBODY)
                .read("$.[?(@.username=='" + value + "')].username");
        Reporter.addStepLog("Found the user name on User list output");
        if (userList == null || userList.isEmpty()) {
            Reporter.addStepLog("User list output is null");
        }
    }

    public static int getUserID(String userName) throws Throwable {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get("/users");
        String responseString = response.body().asString();
        System.out.println("userName === " + userName);
        List<Object> filteredIds = com.jayway.jsonpath.JsonPath.parse(responseString)
                .read("$[?(@.username == '" + userName + "')].id");
        if (filteredIds == null || filteredIds.isEmpty()) {
            return -1;
        }
        Integer id = (Integer) filteredIds.get(0);
        System.out.println("HelperMethods -> Fetched User ID = " + id);
        return id;
    }

    @Then("^Retrive post details written by the \"([^\"]*)\"$")
    public static Integer[] getPostID(String userName) throws Throwable {
        int userID = getUserID(userName);
        System.out.println("my userid is " + userID);
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get("/posts");
        String responseString = response.body().asString();
        List<Object> fetchPostIds = com.jayway.jsonpath.JsonPath.parse(responseString)
                .read("$[?(@.userId == " + userID + ")].id");
        System.out.println(fetchPostIds);
        Integer[] postIds = fetchPostIds.toArray(new Integer[0]);
        System.out.println(postIds);
        for (Integer id : postIds) {
            Reporter.addStepLog("************************************");
            Reporter.addStepLog("Post id for user id " + userID + " = " + String.valueOf(id));
            Reporter.addStepLog("************************************");
        }
        return postIds;
    }

    @Then("^Retrive comments for the each posts \"([^\"]*)\"$")
    public static ArrayList<String> getComments(String userName) throws Throwable {

        ArrayList<String> postsList = new ArrayList<String>();
        Integer[] postId = getPostID(userName);
        for (int pIds : postId) {
            List<Object> fetchComments = com.jayway.jsonpath.JsonPath.parse(RESPONSEBODY)
                    .read("$[?(@.postId == " + pIds + ")].body");
            String postedComments = fetchComments.toString();
            postsList.add(postedComments);
        }
        //Printing all the comments
        for (String comment : postsList) {
            Reporter.addStepLog("************************************");
            Reporter.addStepLog("Comments by the user= "+ String.valueOf(comment));
            Reporter.addStepLog("************************************");
        }
        return postsList;
    }

    public static ArrayList<String> getEmailAdressesByPostId(int PostId) throws MalformedURLException {
        ArrayList<String> emailList = new ArrayList<String>();

        List<Object> fetchEmaiAddress = com.jayway.jsonpath.JsonPath.parse(RESPONSEBODY)
                .read("$[?(@.postId == " + PostId + ")].email");
        for (Object object : fetchEmaiAddress) {
            emailList.add((String) object);
        }
        return emailList;
    }

    @Then("^verify the emails in the comments section for user \"([^\"]*)\" is in proper format")

    public static void isValidEmailAddress(String userName) throws Throwable {
        Integer[] postId = getPostID(userName);
        boolean emailValidationResult = true;
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-z"
                + "A-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        for (Integer id : postId) {
            ArrayList<String> email = getEmailAdressesByPostId(id);
            Object[] objects = email.toArray();
            int len = objects.length;
            System.out.println("Object Length is:" + len);
            for (Object emailID : email) {
                System.out.println("Object Value is:" + emailID);
                emailValidationResult = pattern.matcher((CharSequence) emailID).matches();
                Reporter.addStepLog("Email address " + emailID + " for post id " + id + " is in regular format");
                if (!emailValidationResult) {
                    Reporter.addStepLog("Email address " + emailID + " for post id " + id + " is not in regular format");

                }
            }

        }
    }


    @Then("^I try to verify the status code is \"([^\"]*)\"$")
    public void verifyStatusCode(String statusCode) {
        if (statusCode.equals(String.valueOf(STATUS_CODE))) {
            Assert.assertEquals(STATUS_CODE, statusCode);
            Reporter.addStepLog(Status.PASS + " :: Status Code is :: " + STATUS_CODE);
            logger.info("Status Code is :: " + STATUS_CODE);
        } else {
            Assert.assertEquals(STATUS_CODE, statusCode);
            Reporter.addStepLog(Status.FAIL + " :: Status Code is :: " + STATUS_CODE);
            logger.info("Status Code is not as expected :: " + STATUS_CODE);
        }
    }


}
