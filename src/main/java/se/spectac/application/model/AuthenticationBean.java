package se.spectac.application.model;

public class AuthenticationBean {

    private String message;

    //constructors, getters


    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}