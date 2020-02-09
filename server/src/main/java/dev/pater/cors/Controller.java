package dev.pater.cors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

    @GetMapping(value = "/hello", produces = MediaType.APPLICATION_JSON_VALUE)

    public String hello(){
        return "Hello world!";
    }
}
