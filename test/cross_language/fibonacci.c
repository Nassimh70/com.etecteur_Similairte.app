#include <stdio.h>

void fibonacci(int count) {
    int previous = 0;
    int current = 1;

    for (int index = 0; index < count; index++) {
        printf("%d", previous);
        if (index + 1 < count) {
            printf(" ");
        }
        int next = previous + current;
        previous = current;
        current = next;
    }
    printf("\n");
}

int main(void) {
    fibonacci(8);
    return 0;
}
