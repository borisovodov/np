FROM python:3.7

RUN apt-get update && \
	apt-get install -y
RUN pip install psycopg2==2.7 django==2.1 mapbox==0.17 uwsgi==2.0.18

COPY . /opt/np

ENV DJANGO_ENV=prod
ENV DOCKER_CONTAINER=1

EXPOSE 8000

CMD ["uwsgi", "--ini", "/opt/np/uwsgi.ini"]
