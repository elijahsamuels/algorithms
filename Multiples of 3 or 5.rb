def solution(number)
    numberSum = 0
    i = 0
    while i != number do
        if i % 3 == 0 || i % 5 == 0
            numberSum += i;
        end
        i = i + 1;
        
    end
    puts "numberSum: #{numberSum} "
    return numberSum
end

puts solution(10) # 23

