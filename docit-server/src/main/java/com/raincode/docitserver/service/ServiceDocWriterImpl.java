package com.raincode.docitserver.service;

import com.raincode.docitserver.model.DataMatrix;
import org.springframework.stereotype.Service;

@Service
public class ServiceDocWriterImpl implements ServiceDocWriter{
    public StringBuilder getAsciiDoc(DataMatrix dataMatrix) {
        return new StringBuilder("Foo");
    }
}
