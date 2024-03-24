function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let tax = calculatePAYE(basicSalary);

    // Calculate NHIF Deductions
    let nhifDeductions = calculateNHIF(grossSalary);

    // Calculate NSSF Deductions
    let nssfDeductions = calculateNSSF(basicSalary);

    // Calculate Net Salary
    let netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return netSalary;
}

function calculatePAYE(basicSalary) {
    // Tax Rates and Thresholds
    const taxBrackets = [
        { min: 0, max: 24000, rate: 0.10 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.30 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];

    let annualSalary = basicSalary * 12;
    let tax = 0;

    for (const bracket of taxBrackets) {
        if (annualSalary > bracket.min) {
            let taxableAmount = Math.min(bracket.max, annualSalary) - bracket.min;
            tax += taxableAmount * bracket.rate;
        }
    }

    return tax / 12; // Convert back to monthly tax
}

function calculateNHIF(grossSalary) {
    const nhifBrackets = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    for (const bracket of nhifBrackets) {
        if (grossSalary >= bracket.min && grossSalary <= bracket.max) {
            return bracket.deduction;
        }
    }
}

function calculateNSSF(basicSalary) {
    const nssfTier1Limit = 7000;
    const nssfTier2Limit = 36000;
    const employeeContributionRate = 0.06;

    let totalDeduction = 0;

    // Tier I NSSF Deduction
    if (basicSalary <= nssfTier1Limit) {
        totalDeduction += basicSalary * employeeContributionRate;
    } else {
        totalDeduction += nssfTier1Limit * employeeContributionRate;
    }

    // Tier II NSSF Deduction
    if (basicSalary > nssfTier1Limit && basicSalary <= nssfTier2Limit) {
        totalDeduction += (basicSalary - nssfTier1Limit) * employeeContributionRate;
    } else if (basicSalary > nssfTier2Limit) {
        totalDeduction += (nssfTier2Limit - nssfTier1Limit) * employeeContributionRate;
    }

    return totalDeduction;
}
