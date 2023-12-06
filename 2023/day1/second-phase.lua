local numMap = {
    ["one"] = 1,
    ["two"] = 2,
    ["three"] = 3,
    ["four"] = 4,
    ["five"] = 5,
    ["six"] = 6,
    ["seven"] = 7,
    ["eight"] = 8,
    ["nine"] = 9
}

local function readLine(line)
    local numInLine = {}

    for i = 1, #line do
        for j = 1, #line do
            local subStr = string.sub(line, i, j)

            local converted = numMap[subStr]
            if converted ~= nil then
                numInLine[#numInLine + 1] = converted
            end

            if tonumber(subStr) ~= nil then
                numInLine[#numInLine + 1] = subStr
            end
        end
    end

    local calibrationValue = numInLine[1] .. numInLine[#numInLine]
    return calibrationValue
end

local function getLines()
    local sum = 0
    for line in io.lines("input.txt") do
        local values = readLine(line)
        sum = sum + values
    end

    print(sum)
end

getLines()
