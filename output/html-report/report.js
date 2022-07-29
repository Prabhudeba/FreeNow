$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeatureGet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Prabhudeba Parida"
    },
    {
      "line": 2,
      "value": "# Free Now Project-Automation assignment"
    }
  ],
  "line": 3,
  "name": "GET: Automated Demo Tests",
  "description": "Description: GET: purpose of this feature is to test some demo app.",
  "id": "get:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Validate the response code for the users endpoint",
  "description": "",
  "id": "get:-automated-demo-tests;validate-the-response-code-for-the-users-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to set resource URL as \"\u003cURL\u003e\" to the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;validate-the-response-code-for-the-users-endpoint;",
  "rows": [
    {
      "cells": [
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 14,
      "id": "get:-automated-demo-tests;validate-the-response-code-for-the-users-endpoint;;1"
    },
    {
      "cells": [
        "/users",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 15,
      "id": "get:-automated-demo-tests;validate-the-response-code-for-the-users-endpoint;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Validate the response code for the users endpoint",
  "description": "",
  "id": "get:-automated-demo-tests;validate-the-response-code-for-the-users-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to set resource URL as \"/users\" to the baseURI",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/users",
      "offset": 31
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String)"
});
formatter.result({
  "duration": 165945800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 705500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 2547157300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 2060200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate the searched user name is present.",
  "description": "",
  "id": "get:-automated-demo-tests;validate-the-searched-user-name-is-present.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I want to set resource URL as \"\u003cURL\u003e\" to the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify the \"\u003csearchUserName\u003e\" is present on the userlist output",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;validate-the-searched-user-name-is-present.;",
  "rows": [
    {
      "cells": [
        "URL",
        "ContentType",
        "searchUserName",
        "RequestMethod",
        "StatusCode",
        "RequestBody"
      ],
      "line": 24,
      "id": "get:-automated-demo-tests;validate-the-searched-user-name-is-present.;;1"
    },
    {
      "cells": [
        "/users",
        "application/json",
        "Samantha",
        "GET",
        "200",
        ""
      ],
      "line": 25,
      "id": "get:-automated-demo-tests;validate-the-searched-user-name-is-present.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Validate the searched user name is present.",
  "description": "",
  "id": "get:-automated-demo-tests;validate-the-searched-user-name-is-present.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I want to set resource URL as \"/users\" to the baseURI",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify the \"Samantha\" is present on the userlist output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/users",
      "offset": 31
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String)"
});
formatter.result({
  "duration": 2839800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 835100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 163253900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 12
    }
  ],
  "location": "StepDefinitionsTest.verifySearchedUserName(String)"
});
formatter.result({
  "duration": 214579000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify post details written by the user.",
  "description": "",
  "id": "get:-automated-demo-tests;verify-post-details-written-by-the-user.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I want to set resource URL as \"\u003cURL\u003e\" to the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Retrive post details written by the \"\u003cuserName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;verify-post-details-written-by-the-user.;",
  "rows": [
    {
      "cells": [
        "URL",
        "ContentType",
        "userName",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 33,
      "id": "get:-automated-demo-tests;verify-post-details-written-by-the-user.;;1"
    },
    {
      "cells": [
        "/posts",
        "application/json",
        "Samantha",
        "GET",
        "200"
      ],
      "line": 34,
      "id": "get:-automated-demo-tests;verify-post-details-written-by-the-user.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Verify post details written by the user.",
  "description": "",
  "id": "get:-automated-demo-tests;verify-post-details-written-by-the-user.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I want to set resource URL as \"/posts\" to the baseURI",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"GET\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Retrive post details written by the \"Samantha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/posts",
      "offset": 31
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String)"
});
formatter.result({
  "duration": 1198100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 954400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cRequestBody\u003e",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 70
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 188617500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 37
    }
  ],
  "location": "StepDefinitionsTest.getPostID(String)"
});
formatter.result({
  "duration": 334240600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Verify the comments for each post.",
  "description": "",
  "id": "get:-automated-demo-tests;verify-the-comments-for-each-post.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I want to set resource URL as \"\u003cURL\u003e\" to the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Retrive comments for the each posts \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;verify-the-comments-for-each-post.;",
  "rows": [
    {
      "cells": [
        "URL",
        "ContentType",
        "username",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 44,
      "id": "get:-automated-demo-tests;verify-the-comments-for-each-post.;;1"
    },
    {
      "cells": [
        "/comments",
        "application/json",
        "Samantha",
        "GET",
        "200"
      ],
      "line": 45,
      "id": "get:-automated-demo-tests;verify-the-comments-for-each-post.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Verify the comments for each post.",
  "description": "",
  "id": "get:-automated-demo-tests;verify-the-comments-for-each-post.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I want to set resource URL as \"/comments\" to the baseURI",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"GET\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Retrive comments for the each posts \"Samantha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/comments",
      "offset": 31
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String)"
});
formatter.result({
  "duration": 905500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 868300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cRequestBody\u003e",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 70
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 168263700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 37
    }
  ],
  "location": "StepDefinitionsTest.getComments(String)"
});
formatter.result({
  "duration": 441997700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Verify the emails in the comments sections are in the proper format",
  "description": "",
  "id": "get:-automated-demo-tests;verify-the-emails-in-the-comments-sections-are-in-the-proper-format",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I want to set resource URL as \"\u003cURL\u003e\" to the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Retrive comments for the each posts \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify the emails in the comments section for user \"\u003cusername\u003e\" is in proper format",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;verify-the-emails-in-the-comments-sections-are-in-the-proper-format;",
  "rows": [
    {
      "cells": [
        "URL",
        "ContentType",
        "username",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 55,
      "id": "get:-automated-demo-tests;verify-the-emails-in-the-comments-sections-are-in-the-proper-format;;1"
    },
    {
      "cells": [
        "/comments",
        "application/json",
        "Samantha",
        "GET",
        "200"
      ],
      "line": 56,
      "id": "get:-automated-demo-tests;verify-the-emails-in-the-comments-sections-are-in-the-proper-format;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "Verify the emails in the comments sections are in the proper format",
  "description": "",
  "id": "get:-automated-demo-tests;verify-the-emails-in-the-comments-sections-are-in-the-proper-format;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I want to set resource URL as \"/comments\" to the baseURI",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"GET\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Retrive comments for the each posts \"Samantha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify the emails in the comments section for user \"Samantha\" is in proper format",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/comments",
      "offset": 31
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String)"
});
formatter.result({
  "duration": 2278300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 1301900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cRequestBody\u003e",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 70
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 159702500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 37
    }
  ],
  "location": "StepDefinitionsTest.getComments(String)"
});
formatter.result({
  "duration": 377721400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 52
    }
  ],
  "location": "StepDefinitionsTest.isValidEmailAddress(String)"
});
formatter.result({
  "duration": 351695600,
  "status": "passed"
});
});