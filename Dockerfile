FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /np3
WORKDIR /np3
RUN pip install psycopg2=2.7
RUN pip install django=2.1
RUN pip install mapbox=0.17

COPY . /np3/
