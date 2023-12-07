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

local function processSet(set)
    local count = {
        ["blue"] = 0,
        ["red"] = 0,
        ["green"] = 0,
    }

    local pairs = stringSplitter(set, ",")
    for _, pair in ipairs(pairs) do
        local values = stringSplitter(pair, " ")
        local amount = tonumber(values[2])
        local color = values[3]

        if color == "blue" then
            if count["blue"] < amount then
                count["blue"] = amount
            end
        end

        if color == "red" then
            if count["red"] < amount then
                count["red"] = amount
            end
        end

        if color == "green" then
            if count["green"] < amount then
                count["green"] = amount
            end
        end
    end

    return count
end

local sum = 0
for line in io.lines("input.txt") do
    local groups = stringSplitter(line, ":")
    local sets = stringSplitter(groups[2], ";")

    local maxCount = {
        ["blue"] = 0,
        ["red"] = 0,
        ["green"] = 0
    }

    for _, set in ipairs(sets) do
        local count = processSet(set)

        if maxCount["blue"] < count["blue"] then
            maxCount["blue"] = count["blue"]
        end

        if maxCount["red"] < count["red"] then
            maxCount["red"] = count["red"]
        end

        if maxCount["green"] < count["green"] then
            maxCount["green"] = count["green"]
        end
    end

    local power = maxCount["blue"] * maxCount["red"] * maxCount["green"]
    sum = sum + power

end

print("total power:", sum)
