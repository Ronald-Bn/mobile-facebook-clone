#include <iostream>
using namespace std;

int power(int base, int exponent)
{
    int result = 1;

    for (int i = 0; i < exponent; i++)
    {
        result *= base;
        cout << result << '\n';
    };
    return result;
}

int main()
{
    cout << power(2, 3);
    return 0;
}