#!/bin/bash
docker run -d --name sql_server_demo -e"ACCEPT_EULA=Y"  -e "SA_PASSWORD=vm2OPeRfL55Ykn4nz" -p 1433:1433 microsoft/mssql-server-linux 
docker ps