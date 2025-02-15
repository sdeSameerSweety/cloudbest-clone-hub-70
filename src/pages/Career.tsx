
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Career = () => {
  const companyInfo = {
    name: "CLOUDBEST SOFTWARE (OPC) PRIVATE LIMITED",
    cin: "U72900OR2021OPC036412",
    status: "Active",
    incorporation: "2021-05-07",
    age: "3 years, 9 months, 0 days",
    category: "Company limited by shares",
    subCategory: "Non-government company",
    class: "One Person Company",
    roc: "ROC Cuttack",
  };

  const financialInfo = {
    authorizedCapital: "₹ 500,000.00",
    paidUpCapital: "₹ 500,000.00",
    lastAgm: "01 Dec 0001",
    lastBalanceSheet: "2023-03-31",
  };

  const contactInfo = {
    email: "muk6388@gmail.com",
    address: "C/o - Una Prasanta Kumar Patra At- Bazar Street, Badadanda Sahi, Kodala, Berhampur, Orissa, India - 761032",
  };

  const directorInfo = {
    name: "UNA SANGRAM KUMAR PATRA",
    designation: "Director",
    appointmentDate: "2021-05-07",
    din: "08470845",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Overview */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CLOUDBEST SOFTWARE (OPC) PRIVATE LIMITED is a One Person Company specializing in computer-related activities
              including website maintenance and multimedia presentations.
            </p>
          </div>

          {/* Basic Information Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(companyInfo).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Financial Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(financialInfo).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          {/* Director Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Director Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(directorInfo).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4">
                {Object.entries(contactInfo).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {key === "email" ? (
                        <a href={`mailto:${value}`} className="text-primary hover:underline">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Career;
