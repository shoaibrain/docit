package com.raincode.docitserver.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.raincode.docitserver.model.DataMatrix;
import com.raincode.docitserver.service.ServiceDocWriterImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DocuController {

    @Autowired
    ServiceDocWriterImpl docService;

    @RequestMapping(value="/docit", method=RequestMethod.GET)
    public StringBuilder getAsciiDoc(@RequestBody DataMatrix dataMatrix) {
        System.out.println(dataMatrix);
        return docService.getAsciiDoc(dataMatrix);
    }


}
