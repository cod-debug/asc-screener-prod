docker stop asc_screener_fe
docker rm asc_screener_fe
docker rmi asc_screener_fe_v1

docker build -t asc_screener_fe_v1 .
docker run -d -p 1317:1317 --name asc_screener_fe asc_screener_fe_v1
docker image prune -f

