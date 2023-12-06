local function getLines()
    local lines = {}

    for line in io.lines("input.txt") do
        lines[#lines + 1] = line
    end

    return lines
end

local function getNumbersInLine(line)
    local firstNum, secondNum = nil, nil
    for j = 1, #line do
        local element = string.sub(line, j, j)

        local converted = tonumber(element)
        if converted ~= nil then
            if firstNum == nil then
                firstNum, secondNum = converted, converted
            else
                secondNum = converted
            end
        end
    end

    return { firstNum, secondNum }
end

local lines = getLines()

local results = {}

for i = 1, #lines do
    local line = lines[i]
    local result = getNumbersInLine(line)
    local combined = result[1] .. result[2]
    results[#results + 1] = combined
end

local sum = 0
for i = 1, #results do
    sum = sum + results[i]
end

print("sum", sum)
