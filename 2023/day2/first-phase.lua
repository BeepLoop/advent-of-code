local lookUpTable = {
    ["blue"] = 14,
    ["green"] = 13,
    ["red"] = 12
}

local function stringSplitter(line, separator)
    local strMap = {}
    local subStr = ""

    for i = 1, #line do
        local curr = string.sub(line, i, i)
        if curr ~= separator then
            subStr = subStr .. curr
        else
            strMap[#strMap + 1] = subStr
            subStr = ""
        end
    end
    strMap[#strMap + 1] = subStr

    return strMap
end

local function processSet(sets)
    for _, set in ipairs(sets) do
        local cubes = stringSplitter(set, ",")

        for _, cube in ipairs(cubes) do
            local cubeValue = stringSplitter(cube, " ")

            local amount = tonumber(cubeValue[2])
            local color = cubeValue[3]

            if amount > lookUpTable[color] then
                return false
            end
        end
    end

    return true
end

local sum = 0
for line in io.lines("input.txt") do
    local groups = stringSplitter(line, ":")
    local sets = stringSplitter(groups[2], ";")

    local isPossible = processSet(sets)
    if isPossible then
        local gameId = stringSplitter(groups[1], " ")[2]
        sum = sum + gameId
    end
end

print("sum:", sum)
