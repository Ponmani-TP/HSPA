
export interface Iproperty {
    
    id: number;
    SellRent: number;
    Name: String;
    Type: String;
    Price: number;
    Image?: String;//some of the input doesn't have this property displayed, so the default image will be displayed
}