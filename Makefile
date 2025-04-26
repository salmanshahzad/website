CC = gcc
CFLAGS = -pedantic -Wall -Wextra -Werror
LDFLAGS =

all:
	$(CC) -o server $(CFLAGS) $(LDFLAGS) src/server.c
	strip server
